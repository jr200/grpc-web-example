pub mod proto {
    tonic::include_proto!("streaming");
}

use std::{error::Error, time::Duration};

use tokio::time::sleep;
use tokio_stream::wrappers::ReceiverStream;
use tonic::{Request, Response, Status, transport::Server};

use self::proto::{shop_server::{Shop, ShopServer}, InventoryRequest, InventoryResponse};

pub struct ShopService;

#[tonic::async_trait]
impl Shop for ShopService {
    type SubscribeInventoryStream = ReceiverStream<Result<InventoryResponse, Status>>;

    async fn subscribe_inventory (
        &self,
        request: Request<InventoryRequest>,
    ) -> Result<Response<Self::SubscribeInventoryStream>, Status> {

        let request = request.into_inner();
        log::info!("request: {:?}", &request);

        let (tx, rx) = tokio::sync::mpsc::channel(4);
        tokio::spawn(async move {
            let mut n = 0;
            loop {
                n += 1;
                let res = Ok(InventoryResponse {
                    item_name: format!("[{}]", &request.item_name),
                    time: n + 1000,
                    quantity: n * 10,
                });

                sleep(Duration::from_millis(1000)).await;
                tx.send(res).await.unwrap()
            }
        });
        
        Ok(Response::new(ReceiverStream::new(rx)))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {

    env_logger::init();
    let addr = "127.0.0.1:50051".parse().unwrap();
    let service = ShopServer::new(ShopService);

    Server::builder()
        .accept_http1(true)
        .add_service(tonic_web::enable(service))
        .serve(addr)
        .await?;

    Ok(())
}
